export default function LayoutPageFeed(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  const { modal, children } = props;

  return (
    <>
      {modal}
      {children}
    </>
  );
}
