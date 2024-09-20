"use client";
import Link from "next/link";
import styled from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    background: none;
    display: flex;
    height: 100%;
    min-width: 350px;
    padding: 0.3rem calc((100vw - 1100px) / 2);
    z-index: 25;
    align-items: center;
    left: 0;
    text-align: right;
    background: #dff2ff;
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 1rem 2rem;
    height: 100%;
    cursor: pointer;
    font-size: 30pt;
    font-family: "TangoSans";
    border-radius: 40px;
    &:hover {
        background: #c0d5e3;
    }
`;

/*@media screen and (max-width: 900px) {
    color: #071330;
    width: 100%;
    font-size: 1.3rem;
  } */

export const NavMenu = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    margin-right: -24px;
    flex-direction: column;
    left: 100px;
    gap: 50px;
`;
