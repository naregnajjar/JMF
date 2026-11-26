export type DonorLocale = "en" | "hy";

export type DonorItemData = {
  _key: string;
  name: string;
  amount: number;
  location: string | null;
};

export type DonorItemProps = {
  donor: DonorItemData;
  locale: DonorLocale;
};
