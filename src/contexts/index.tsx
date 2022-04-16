import React, { createContext, Dispatch, useReducer } from "react";
import { create, deleteById, fetchById, fetchList, update } from "../lib/api";
import { UserListType } from "../interfaces";

interface UserState {
  userList: UserListType[];
  user: UserListType;
}

interface UserProviderProps {
  children: JSX.Element | JSX.Element[];
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

export const UserProvider = ({ children }: UserProviderProps) => {
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
        userList: state.userList.map((user) =>
          user.id === state.user.id
            ? { ...action.payload, id: state.user.id, key: state.user.id }
            : user
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== state.user.id),
      };
    default:
      throw new Error("Unhandled action");
  }
};

export const getUserList = async (dispatch: Dispatch<Action>) => {
  try {
    const res = await fetchList();
    dispatch({
      type: "GET_USER_LIST",
      payload: (res as UserListType[]).map((user) => {
        return {
          ...user,
          key: user.id,
        };
      }),
    });
  } catch (err) {
    throw err;
  }
};

export const getUser = async (dispatch: Dispatch<Action>, id: number) => {
  try {
    const res = await fetchById(id);
    dispatch({ type: "GET_USER", payload: res as UserListType });
  } catch (err) {
    throw err;
  }
};

export const createUser = async (
  dispatch: Dispatch<Action>,
  data: UserListType
) => {
  try {
    const res = (await create(data)) as UserListType;
    dispatch({
      type: "CREATE_USER",
      payload: { ...res, key: res.id },
    });
  } catch (err) {
    throw err;
  }
};

export const setUser = (dispatch: Dispatch<Action>, user: UserListType) => {
  dispatch({ type: "SET_USER", payload: user });
};

export const updateUser = async (
  dispatch: Dispatch<Action>,
  data: UserListType
) => {
  try {
    const res = await update(data);
    dispatch({ type: "UPDATE_USER", payload: res as UserListType });
  } catch (err) {
    throw err;
  }
};

export const deleteUser = async (dispatch: Dispatch<Action>, id: number) => {
  try {
    const res = await deleteById(id);
    dispatch({ type: "DELETE_USER", payload: res as number });
  } catch (err) {
    throw err;
  }
};
