import { VerifyScreen } from './screen';

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: {
    email: string;
  };
}) {
  const params = await searchParams;
  return <VerifyScreen email={params.email} />;
}
