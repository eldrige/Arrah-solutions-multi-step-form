'use client'
import {useContext, useReducer, createContext} from 'react'


interface RegisterContextType {
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    password: string | undefined;
    phoneNumber: string | undefined;
    brandName: string | undefined;
    brandType: string | undefined;
    streetAddress: string | undefined;
    city: string | undefined;
    zipCode: string | undefined;
    taxIdNumber: string | undefined;
    dispatch: React.Dispatch<ACTIONTYPE>
}

type ACTIONTYPE =
    | {type: "update_first_name"; payload: string}
    | {type: "update_last_name"; payload: string}
    | {type: "update_email"; payload: string}
    | {type: "update_password"; payload: string}
    | {type: "update_phone_number"; payload: string}
    | {type: "update_brand_name"; payload: string}
    | {type: "update_brand_type"; payload: string}
    | {type: "update_street_address"; payload: string}
    | {type: "update_city"; payload: string}
    | {type: "update_zip_code"; payload: string}
    | {type: "update_tax_id_number"; payload: string}
    | {type: "clear"}


const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    brandName: "",
    brandType: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    taxIdNumber: ""
};

function registerReducer(state: typeof initialValues, action: ACTIONTYPE) {
    switch (action.type) {
        case 'update_first_name': {
            return {
                ...state,
                firstName: action.payload,
            };
        }
        case 'update_last_name': {
            return {
                ...state,
                lastName: action.payload,
            };
        }
        case 'update_zip_code': {
            return {
                ...state,
                zipCode: action.payload,
            };
        }
        case 'update_email': {
            return {
                ...state,
                email: action.payload,
            };
        }
        case 'update_brand_name': {
            return {
                ...state,
                brandName: action.payload,
            };
        }
        case 'update_brand_type': {
            return {
                ...state,
                brandType: action.payload,
            };
        }
        case 'update_password': {
            return {
                ...state,
                password: action.payload,
            };
        }
        case 'update_phone_number': {
            return {
                ...state,
                phoneNumber: action.payload,
            };
        }
        case 'update_street_address': {
            return {
                ...state,
                streetAddress: action.payload,
            };
        }
        case 'update_tax_id_number': {
            return {
                ...state,
                taxIdNumber: action.payload,
            };
        }
        case 'clear': {
            return {
                ...initialValues
            };
        }


    }
    throw Error('Unknown action ' + action.payload);
}

const RegisterContext = createContext<RegisterContextType | null>(null)

const Register = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(registerReducer, initialValues);

    return (
        <RegisterContext.Provider value={{...state, dispatch}}>{children}</RegisterContext.Provider>
    )
}

export const useRegisterContexxt = () => {
    const context = useContext(RegisterContext);
    if (!context) {
        throw new Error('Component must be wrapped with the WaitListProvider');
    }
    return context;
}

export default Register