"use client"
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import menu from "@/app/utils/menu"
import Link from "next/link";
import { link } from "fs";
import { useRouter } from "next/router";

function Sidebar()
{
    const {theme} = useGlobalState();
    console.log(theme);

    const router = useRouter();
    const handleClick = (link:string) => {
        router.push(link);
    }

    return <SidebarStyled theme={theme} >
        <div className="profile">
            <div className="profile-overlay"></div>
            <div className="image">
                <Image width={70} height={70} src="/avatar1.png" alt="profile" />
            </div>
            <h1>
                <span>Harpreet</span>
                <span>Singh</span>
            </h1>
        </div>
        <ul className="nav-iems">
            {menu.map((item) => {
                return <li
                    className={"nav-item"}
                    onClick={() => {
                        handleClick(item.link);
                    }}
                >
                    {item.icon}
                    <Link href={item.link}>
                        {item.title}
                    </Link>
                </li>
            })}
        </ul>
    </SidebarStyled>
}

const SidebarStyled = styled.nav`
    position: relative;
    width: ${(props) => props.theme.sidebarWidth};
    background-color: ${(props) => props.theme.colors.Bg2};
    border-right: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;
`;
export default Sidebar;