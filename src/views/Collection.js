import SongItem from "components/SongItem"
import { Icon } from "Icons"
import Title from "components/Title";
import { NavLink } from "react-router-dom";
import Section from "components/Section";


function Collection() {
	
	const items = [
		{
			id: 1,
			title: 'Bence Best Of Kezzo',
			description: 'By Yigit Dogan',
			songtitle: 'Arama',
			artist: 'Kezzo',
			image: 'https://i.scdn.co/image/ab67616d0000b273acdcb5e7b9b3553f7ec72362',
			type: 'album',
			src: 'https://ygtdgn.com/project-audio/kezzo-arama.mp3'
		},
		{
			id: 2,
			title: 'Bence Best Of Allame',
			songtitle: 'Soru',
			description: 'By Yigit Dogan',
			artist: 'Allame, Kezzo',
			image: 'https://upload.wikimedia.org/wikipedia/tr/0/07/Anakronik-album.jpg',
			type: 'album',
			src: 'https://ygtdgn.com/project-audio/allame-kezzo-soru.mp3'
		},
		{
			id: 3,
			title: 'Bence Best Of Joker',
			description: 'By Yigit Dogan',
			artist: 'Joker',
			songtitle: 'Bi Kivilcim Yeter',
			image: 'https://i.scdn.co/image/ab6761610000e5ebb0cef9275c5cd439baf12c77',
			type: 'album',
			src: 'https://ygtdgn.com/project-audio/bi-kivilcim-yeter-joker.mp3'
		},
		{
			id: 4,
			title: 'Your Episodes',
			description: '4 episodes',
			songtitle: 'Haftalık Gündem Değerlendirmesi 2022/33',
			artist: 'Teknoseyir',
			image: 'https://i.scdn.co/image/62c2ecc8138caf88f04305b307bbd9d5d8adcccb',
			type: 'podcast',
			src: 'https://ygtdgn.com/project-audio/haftalik-gundem-33.mp3'
		},
		{
			id: 5,
			title: 'Bence Best Of Defkhan',
			description: 'By Yigit Dogan',
			songtitle: 'Hayatim bi Battle',
			artist: 'Defkhan',
			image: 'https://i.scdn.co/image/ab67616d0000b27375fbc1c088361e3359259874',
			type: 'album',
			src: 'https://ygtdgn.com/project-audio/Defkhan-Hayatim-bi-Battle.mp3'
		}
	]

	
	return (
		<div>
			<h1 className="text-2xl text-white font-semibold tracking-tight hover:underline my-4">Playlists</h1>
			
			<div className="grid grid-col-4">
				<div
			className='rounded-lg flex flex-shrink-0 relative group w-[440px] h-[286px]' style={{background: "linear-gradient(149.46deg,#450af5,#8e8ee5 99.16%)"}}	>
				<button
				className="w-12 h-12 mb-3 shadow-xl mr-3 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center hidden">
					<Icon name='play' size={26} />
				</button>
					<div className="absolute inset-0 overflow-hidden pt-8">
					
						<div className="">
							<div className="flex items-center px-4 gap-x-1 pt-10">
								<p className=" text-white">Kezzo</p> <p className=" text-link"> Arama</p> &bull;
								<p className=" text-white">Kezzo</p> <p className=" text-link"> GEL</p>  &bull;
								<p className=" text-white">Mirach</p> <p className=" text-link"> Shaker</p> &bull;
								<p className=" text-white">Moskape</p> 
							</div>
							<div className="flex px-4 gap-x-1 pt-1">
								<p className=" text-link"> Ben Yazmiyorum</p> &bull;
								<p className=" text-white">Joker</p> <p className=" text-link"> Palavra</p>  &bull;
								<p className=" text-white">Joker</p> <p className=" text-link"> Kafamiza Gore</p>
								
							</div>
							<div className="flex px-4 gap-x-1 pt-1">
								
								<p className=" text-white">Soner Sarikabadayi</p> <p className=" text-link"> PIR</p>
								
							</div>
						</div>

					<h3 className="p-4 text-[2rem] tracking-tighter font-bold">
						Liked Songs
					</h3>
					<p className="px-4 ">1102 liked songs</p>
					</div>
				</div>
				
			<div>
			<Section items={items}/>
			</div>
			</div>
		</div>
	)
}

export default Collection
