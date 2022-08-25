function Category({category}){
	return(
		<div
		style={{'background': category.color}}
		className='rounded-md before:pt-[100%] before:block relative'	>
			<div className="absolute inset-0 overflow-hidden">
			<h3 className="p-4 text-2xl tracking-tighter font-semibold">
				{category.title}
			</h3>
			<img src={category.cover} className='w-[6.25rem] h-[6.25rem] rotate-[25deg] absolute translate-x-[18%] translate-y-[2%] shadow-spotify bottom-0 right-0' />
			</div>
		</div>
	)

}

export default Category