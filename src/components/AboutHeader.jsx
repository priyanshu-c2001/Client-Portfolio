const AboutHeader = () => {
    return (
        <div className="w-full bg-gray-300 py-16 md:py-40">
            <div className="mx-auto max-w-7xl px-4 mt-24 md:mt-14">
                <div className="text-center">
                    <h1 className="font-sans text-5xl font-semibold md:text-6xl text-foreground mb-6">About Us</h1>

                    {/* Here is the breadcrumb rebuilt with standard HTML and Tailwind:
            - <Breadcrumb> is replaced with <nav aria-label="breadcrumb">
            - <BreadcrumbList> is replaced with <ol>
            - <BreadcrumbItem> is replaced with <li>
            - <BreadcrumbSeparator> is replaced with a decorative <li>
          */}
                    <nav aria-label="breadcrumb">
                        {/* We add 'flex items-center' and 'gap-2.5' which are 
              default styles from shadcn's <BreadcrumbList>
            */}
                        <ol className="flex items-center justify-center gap-2.5">

                            {/* This is the first <BreadcrumbItem> */}
                            <li className="inline-flex items-center">
                                <span className="text-sm font-semibold text-foreground uppercase tracking-wider">HOME</span>
                            </li>

                            {/* This is the <BreadcrumbSeparator> */}
                            <li aria-hidden="true" className="flex items-center text-slate-500">
                                <span>/</span>
                            </li>

                            {/* This is the second <BreadcrumbItem> */}
                            <li className="inline-flex items-center">
                                <span className="text-sm font-semibold text-foreground uppercase tracking-wider">ABOUT US</span>
                            </li>
                        </ol>
                    </nav>

                </div>
            </div>
        </div>
    )
}

export default AboutHeader;