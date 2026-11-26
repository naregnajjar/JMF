import type { DonorItemData, DonorLocale } from "../DonorItem/props";

export type DonorListData = {
  title: string;
  donors: DonorItemData[];
};

export type DonorListProps = {
  list: DonorListData;
  locale: DonorLocale;
};
