import Link from 'next/link'
export default function Footer() {
    return (
        <footer className='bg-gray-900 text-gray-100 shadow w-full mt-auto'>
            <div className='container mx-auto flex p-5 items-center justify-center'>
                <h2 className="pr-4 border-r">&copy; <span>JimmyLeu 2021</span></h2>
                <div className="hover:text-black hover:bg-white pl-4 pr-4">

                    <Link href="mailto: jimmyleu76@gmail.com">
                        <a className='block transition duration-500 ease select-none'>Contact me</a>
                    </Link>
                 </div>

            </div>
        </footer>
    )
}
