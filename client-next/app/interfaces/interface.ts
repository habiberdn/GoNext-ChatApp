import { type } from "os";

export interface app {
    ws: any,
    container: any
}

export interface ModalProps {
    title: string
    open: boolean;
    onClose: () => void;
}

export interface SignUpModalProps {
    title: string
    open: boolean;
    onClose: () => void;
    toggleSignUp: () => void
}

export interface LoginModalProps {
    title: string
    open: boolean;
    onClose: () => void;
}
type FormEvent = React.FormEvent<HTMLFormElement>
type MouseEvent = React.MouseEvent<HTMLButtonElement,MouseEvent>
type ChangeEvent = React.ChangeEvent<HTMLInputElement>

export type { FormEvent, MouseEvent, ChangeEvent };

export interface DataSignUp {
    email: string;
    password: string;
    passwordConfirm : string
}

export interface DataLogin {
    email: string;
    password: string;
}
