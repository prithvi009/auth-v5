"use client";

interface LoginButtonProps {
    children: React.ReactNode;
    mode: "modal" | "redirect";
    asChild?: boolean;
}

import { useRouter } from "next/navigation";

export const LoginButton = ({ children, mode, asChild = false }: LoginButtonProps) => {
    
    const router = useRouter();
    const onClick = () => {
        router.push("/auth/login");
    };

    if(mode === "modal") {
        return (
            <span>
            </span>
        );
    }
    return (
        <span onClick={onClick}>
            {children}
        </span>
    );
}