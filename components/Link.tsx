import NextLink from 'next/link';

type Props = {
  href: string;
  className?: string;
  'aria-label'?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};


export default function Link({ href, ...rest }: Props) {
  const isInternalLink = href?.startsWith('/');
  const isAnchorLink = href?.startsWith('#');
  if (isInternalLink) {
    return (
      <NextLink href={href} {...rest}>
        <a {...rest}>{children}</a>
      </NextLink> />
    );
  }

 return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;

}
