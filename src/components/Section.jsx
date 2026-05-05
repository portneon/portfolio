const Section = ({ id, title, children, dark = false }) => (
    <section id={id} className={`py-32 px-6 md:px-20 ${dark ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'}`}>
        <div className="max-w-7xl mx-auto">
            <div className="mb-24 flex items-center gap-6">
                <h2 className="font-editorial text-5xl md:text-7xl italic leading-none">{title}</h2>
                <div className={`h-[1px] flex-1 ${dark ? 'bg-zinc-700' : 'bg-zinc-200'}`}></div>
            </div>
            {children}
        </div>
    </section>
);

export default Section