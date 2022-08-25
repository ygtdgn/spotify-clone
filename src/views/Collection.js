
		/*<div>
			<h1 className="text-2xl text-white font-semibold tracking-tight hover:underline my-4">Calma Listeleri</h1>
			<div className="bg-[#6649ed] w-[440px] flex items-center rounded-lg h-[17.875rem] px-4  break-word absolute">
				<div className="flex items-center">
					<div className="flex items-center pb-20">
						<div className="flex max-w-xs gap-x-1 w-[100%] absolute">
							<p className=" text-white">Kezzo </p> <p className=" text-link"> Arama</p> &bull;
							<p className=" text-white">Kezzo </p> <p className=" text-link"> GEL</p> &bull;
							<p className=" text-white">Mirach </p> <p className=" text-link"> Shaker</p> &bull; 
							<p className=" text-white">Moskape </p> 
						</div>
						<div className="flex gap-x-1 w-[100%] pt-12 absolute">
							<p className=" text-link">Ben Yazmiyorum</p> &bull;
							<p className=" text-white">Joker </p> <p className=" text-link"> Palavra</p> &bull;
							<p className=" text-white">Joker </p> <p className=" text-link"> Kafamiza Gore</p> 
						</div>
						<div className="flex gap-x-1 w-[100%] pt-[7rem] absolute">&bull;
							<p className=" text-white">Soner Sarikabadayi </p> <p className=" text-link"> Pir</p> 
						</div>
					</div>
				</div>
				<div>
					<p>Begendiginiz Sarkilar</p>
				</div>
			</div>
		</div>
	)
}
*/

function Collection() {
	return (
		<div>
			<h1 className="text-2xl text-white font-semibold tracking-tight hover:underline my-4">Calma Listeleri</h1>
			<div
		className='rounded-lg flex flex-shrink-0 relative w-[440px] h-[13.75rem] bg-[#5347f4]'	>
			<div className="absolute inset-0 overflow-hidden">
			
			<div className="flex items-center justify-center gap-x-1">
			<p className=" text-white">Kezzo</p> <p className=" text-link"> Arama</p> &bull;
			<p className=" text-white">Kezzo</p> <p className=" text-link"> Arama</p>  &bull;
			<p className=" text-white">Kezzo</p> <p className=" text-link"> Arama</p> &bull;
			<p className=" text-white">Kezzo</p> <p className=" text-link"> Arama</p> &bull;
			<p className=" text-white">Kezzo</p> <p className=" text-link"> Arama</p> &bull;
			</div>

			<h3 className="p-4 text-[2.5rem] tracking-tighter font-semibold">
				Begenilen Sarkilar
			</h3>
			</div>
		</div>
		</div>
	)
}

export default Collection
