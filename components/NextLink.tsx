import Link from 'next/link';

export default function NextLink({ href, children, ...rest }: any) {
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}
