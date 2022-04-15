import React, { createContext, Dispatch, useReducer } from "react";
import { create, deleteById, fetchById, fetchList, update } from "../lib/api";
import { UserListType } from "../lib/interfaces";

interface UserState {
  userList: UserListType[];
  user: UserListType;
}

type Action =
  | { type: "GET_USER_LIST"; payload: UserListType[] }
  | { type: "SET_USER"; payload: UserListType }
  | { type: "GET_USER"; payload: UserListType }
  | { type: "CREATE_USER"; payload: UserListType }
  | { type: "UPDATE_USER"; payload: UserListType }
  | { type: "DELETE_USER"; payload: number };

const initialState: UserState = {
  userList: [],
  user: {
    id: 0,
    name: "",
    email: "",
    company: "",
    jobTitle: "",
  },
};

export const UserStateContext = createContext<UserState>(initialState);
export const UserDispatchContext = createContext<Dispatch<Action>>(() => null);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

const UserReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case "GET_USER_LIST":
      return {
        ...state,
        userList: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "CREATE_USER":
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    case "UPDATE_USER":
      return {
        ...state,
        userList: state.userList.map((ele) =>
          ele.id === state.user.id
            ? { ...action.payload, id: state.user.id, key: state.user.id }
            : ele
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        userList: state.userList.filter((ele) => ele.id !== state.user.id),
      };
    default:
      throw new Error("Unhandled action");
  }
};

export async function getUserList(dispatch: Dispatch<Action>) {
  await fetchList()
    .then((res) => {
      dispatch({
        type: "GET_USER_LIST",
        payload: (res as UserListType[]).map((ele) => {
          return {
            ...ele,
            key: ele.id,
          };
        }),
      });
    })
    .catch((err) => {
      throw err;
    });
}

export async function getUser(dispatch: Dispatch<Action>, id: number) {
  await fetchById(id)
    .then((res) => {
      dispatch({ type: "GET_USER", payload: res as UserListType });
    })
    .catch((err) => {
      throw err;
    });
}

export async function createUser(
  dispatch: Dispatch<Action>,
  data: UserListType
) {
  await create(data)
    .then((res) => {
      const userInfo = res as UserListType;
      dispatch({
        type: "CREATE_USER",
        payload: { ...userInfo, key: userInfo.id },
      });
    })
    .catch((err) => {
      throw err;
    });
}

export function setUser(dispatch: Dispatch<Action>, user: UserListType) {
  dispatch({ type: "SET_USER", payload: user });
}

export async function updateUser(
  dispatch: Dispatch<Action>,
  data: UserListType
) {
  await update(data)
    .then((res) => {
      dispatch({ type: "UPDATE_USER", payload: res as UserListType });
    })
    .catch((err) => {
      throw err;
    });
}

export async function deleteUser(dispatch: Dispatch<Action>, id: number) {
  await deleteById(id)
    .then((res) => {
      dispatch({ type: "DELETE_USER", payload: id });
    })
    .catch((err) => {
      throw err;
    });
}
