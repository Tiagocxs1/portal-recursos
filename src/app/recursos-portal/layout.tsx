export const metadata = {
  title: "Portal de Captação de Recursos",
  description:
    "Portal de consulta de programas de captação de recursos para TS Digitais.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}