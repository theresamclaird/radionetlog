import { type ReactElement } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Amplify, withSSRContext } from "aws-amplify";
import { getStation } from "../../graphql/queries";
import awsExports from "../../aws-exports";
import StationForm, {
  type StationFormProps,
} from "../../components/StationForm";

Amplify.configure({ ...awsExports, ssr: true });

interface PageContext {
  req: any;
  params: {
    callSign: string;
  };
}

export async function getServerSideProps({ req, params }: PageContext) {
  const SSR = withSSRContext({ req });

  try {
    const { data, errors } = await SSR.API.graphql({
      query: getStation,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: {
        callSign: params.callSign,
      },
    });

    if (Array.isArray(errors) && errors[0].message !== null) {
      errors.forEach((error) => {
        throw new Error(error.message);
      });
    }

    return {
      props: {
        station: data.getStation,
      },
    };
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      station: "",
    },
  };
}

export default function Station({ station }: StationFormProps): ReactElement {
  const router = useRouter();
  const { callSign } = router.query;
  return (
    <div>
      <Head>
        <title>{callSign}</title>
      </Head>
      <main>
        <StationForm station={station} />
      </main>
    </div>
  );
}

// export async function getServerSideProps({ params }: Params) {
//   const { callSign } = params;
//   try {
//     const station = (await API.graphql({
//       query: getStation,
//       variables: { callSign },
//       authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
//     })) as {
//       data: GetStationQuery;
//       errors: any[];
//     };

//     return { props: { station } };
//   } catch (error) {
//     console.error(error);
//   }

//   return { props: {} };
// }

// export async function getStaticProps({ params }) {

//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();

//     return {
//         props: { car: data },
//     }
// }

// export async function getStaticPaths() {

//     const req = await fetch('http://localhost:3000/cars.json');
//     const data = await req.json();

//     const paths = data.map(car => {
//         return { params: { id: car } }
//     })

//     return {
//         paths,
//         fallback: false
//     };
// }
