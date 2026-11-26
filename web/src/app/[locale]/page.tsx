import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DonorList } from "@/components/DonorList/DonorList";
import type { DonorLocale } from "@/components/DonorItem/props";
import type { DonorListData } from "@/components/DonorList/props";
import { client } from "@/sanity/client";

const locales = ["en", "hy"] as const;

function isDonorLocale(locale: string): locale is DonorLocale {
  return locales.some((supportedLocale) => supportedLocale === locale);
}

const donorListQuery = `*[_type == "donorList" && _id == "donorList"][0]{
  "title": coalesce(
    title[language == $locale][0].value,
    title[language == "en"][0].value
  ),
  "donors": donors[]{
    _key,
    name,
    amount,
    "location": coalesce(
      location[language == $locale][0].value,
      location[language == "en"][0].value
    )
  }
}`;

const donorListTitleQuery = `*[_type == "donorList" && _id == "donorList"][0]{
  "title": coalesce(
    title[language == $locale][0].value,
    title[language == "en"][0].value
  )
}`;

type DonorPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: DonorPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isDonorLocale(locale)) return {};

  const list = await client.fetch<{ title: string | null } | null>(donorListTitleQuery, {
    locale,
  });

  return {
    title: list?.title ?? (locale === "hy" ? "Նվիրատուների ցանկ" : "Donor List"),
  };
}

export default async function DonorsPage({ params }: DonorPageProps) {
  const { locale: localeParam } = await params;
  if (!isDonorLocale(localeParam)) notFound();

  const locale = localeParam;
  const list = await client.fetch<DonorListData | null>(donorListQuery, { locale });

  if (!list?.title || !list.donors?.length) notFound();

  return <DonorList list={list} locale={locale} />;
}
