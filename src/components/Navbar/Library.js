
function Library() {
	return (
		<div className="mr-auto ml-4">
			<nav>
                <ul className="inline-block">
                    <li className="inline-block">
                        <button className="bg-[#333] text-sm  px-4 py-2 rounded-md font-semibold">
                            Calma Listeleri
                        </button>
                    </li>
                    <li className="inline-block">
                        <button className=" px-4 py-2 text-sm  rounded-md font-semibold">
                            Podcast'ler
                        </button>
                    </li>
                    <li className="inline-block">
                        <button className=" px-4 py-2 text-sm rounded-md font-semibold">
                            Sanatcilar
                        </button>
                    </li>
                    <li className="inline-block">
                        <button className=" px-4 py-2 text-sm rounded-md font-semibold">
                            Albumler
                        </button>
                    </li>
                </ul>
            </nav>
		</div>
	)
}

export default Library