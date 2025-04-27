import Link from 'next/link';

export default async function HomePage() {
    return (
        <div className="flex items-center h-screen w-screen justify-center">
            <p className="mt-10 flex items-center text-2xl">
                <Link href={'/auth/login'} className="text-blue-500 hover:underline">
                    Login
                </Link>
            </p>
        </div>
    );
}
