import Link from 'next/link'

type Props = {
    slug: string
}

export const Menu = ({ slug }: Props) => {
    const slugUrl = slug.replace(' ', '');

    return (
        <Link
            // href={`/Inner/${slugUrl}`}
            href={`#${slugUrl}`}
            className="p-3 uppercase font-semibold hover:text-red active:text-red transition-colors duration-400 ease-linear"
        >
            {slug}
        </Link>
    );
}
