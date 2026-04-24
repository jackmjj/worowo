import type { PackingListFormState, PackingListItem } from "./types";

export function createEmptyPackingListItem(id: string): PackingListItem {
  return {
    id,
    description: "",
    qty: "",
    unit: "",
    cartonNo: "",
    remarks: "",
  };
}

export function createDefaultPackingListItems(count = 5): PackingListItem[] {
  return Array.from({ length: count }, (_, i) =>
    createEmptyPackingListItem(String(i + 1))
  );
}

export function createDefaultPackingListState(): PackingListFormState {
  return {
    paper: "letter",
    packingListNo: "",
    date: "",
    referenceNo: "",
    shipperCompany: "",
    shipperAddress: "",
    shipperContact: "",
    consigneeName: "",
    consigneeAddress: "",
    consigneeContact: "",
    shipmentDate: "",
    totalCartons: "",
    totalWeight: "",
    items: createDefaultPackingListItems(5),
    generalRemarks: "",
  };
}
