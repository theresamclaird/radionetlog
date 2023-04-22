import React, { type ReactElement, useEffect, useState } from "react";
import { Popper, Fade, Paper } from "@mui/material";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { useRouter } from "next/router";

interface Props {
  children: ReactElement | null;
  renderTrigger: (onClick: any) => ReactElement | null;
}

export default function PopperMenu({ children, renderTrigger }: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", closeMenu);

    return () => {
      router.events.off("routeChangeComplete", closeMenu);
    };
  }, [router]);

  const closeMenu = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  const openMenu = (target: any) => {
    setAnchorEl(target);
    setIsOpen(true);
  };

  function toggleMenu(event: any) {
    isOpen ? closeMenu() : openMenu(event.currentTarget);
  }

  const AccountMenu = () => (
    <ClickAwayListener onClickAway={toggleMenu}>
      <Popper
        open={isOpen}
        anchorEl={anchorEl}
        placement="bottom-end"
        transition
        sx={{ zIndex: 1200 }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper elevation={2}>{children}</Paper>
          </Fade>
        )}
      </Popper>
    </ClickAwayListener>
  );

  return (
    <>
      {renderTrigger((event: any) => {
        toggleMenu(event);
      })}
      <AccountMenu />
    </>
  );
}
