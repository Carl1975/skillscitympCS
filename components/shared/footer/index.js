import Link from "next/link";
export default function Footer({href, title}){
    return(
        <div className="bg-blue-100 w-full max-w-6xl mx-auto py-4 px-4">
        <Link href={href}>
        Goto {title} Page
        </Link>
      </div>
    )
    
}


        