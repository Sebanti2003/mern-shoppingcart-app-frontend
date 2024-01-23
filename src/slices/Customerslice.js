const initialcustomercount = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export default function reducercustomer(state = initialcustomercount, action){
  switch (action.type) {
    case "account/createcustomer":
      return {
        ...state,
        nationalID: action.payload.id,
        fullName: action.payload.name,
        createdAt: action.payload.createdAt,
      };
    case "account/updatename":
      return {
        ...state,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
        fullName: action.payload.name,
      };
    default:
      return state;
  }
}

//action creators

export const createcustomer = (name, nationid) => {
  return {
    type: "account/createcustomer",
    payload: { name: name, id: nationid, createdAt: new Date().toISOString() },
  };
};
export function updatingname(name, nationalID = 890) {
  return {
    type: "account/updatename",
    payload: {
      name: name,
      nationalID: nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}
