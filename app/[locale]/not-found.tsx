import Link from "@/app/components/ui/Link";
import { MetadataProps } from "@/types/metadata";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Container from "../components/Container";

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('notfound.title'),
    description: t('notfound.description'),
  };
}

const Custom404 = () => {
  const t = useTranslations('notfound');

  return (
    <Container className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">
        404
      </h1>

      <p className="text-secondary mb-2">
        {t('description')}
      </p>

      <Link href="/" underline>
        {t('action')}
      </Link>
    </Container>
  )
};

export default Custom404;
