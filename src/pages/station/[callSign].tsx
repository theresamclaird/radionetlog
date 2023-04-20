import { type ReactElement } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Amplify, withSSRContext } from "aws-amplify";
import { stationsByCallSign } from "../../graphql/queries";
import awsExports from "../../aws-exports";
import StationForm from "../../components/StationForm";

Amplify.configure({ ...awsExports, ssr: true });

interface Station {
  __typename: "Station";
  id: string | undefined;
  callSign: string | undefined;
  name: string | undefined;
  location: string | undefined;
  notes: string | undefined;
  attributes: string[];
  owner?: string | null;
  createdAt: string | undefined;
  updatedAt: string | undefined;
}

interface PageContext {
  req: any;
  params: {
    callSign: string;
  };
}

export async function getServerSideProps({ req, params }: PageContext) {
  const SSR = withSSRContext({ req });
  console.log("params", params);

  try {
    const { data } = await SSR.API.graphql({
      query: stationsByCallSign,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: {
        callSign: params.callSign,
      },
    });

    console.log("data", data);

    return {
      props: {
        stations: data.stationsByCallSign.items,
      },
    };
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      stations: {
        callSign: "",
        name: "",
        location: "",
        notes: "",
        attributes: [],
      },
    },
  };
}

interface Applesauce {
  stations: Station[];
}

export default function StationData({ stations }: Applesauce): ReactElement {
  const router = useRouter();
  const { callSign } = router.query;
  return (
    <div>
      <Head>
        <title>{callSign}</title>
      </Head>
      <main>
        {stations.map((station) => (
          <StationForm key={station.id} station={station} />
        ))}
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
