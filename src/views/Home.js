import Section from "components/Section";

function Home() {

	const items = [
		{
			id: 1,
			title: 'Kezzo - Arama',
			description: 'Arama',
			songtitle: 'Arama',
			artist: 'Kezzo',
			image: 'https://i.scdn.co/image/ab67616d0000b273acdcb5e7b9b3553f7ec72362',
			type: 'album',
			src: 'https://ygtdgn.com/project-audio/kezzo-arama.mp3'
		},
		{
			id: 2,
			title: 'Allame, Kezzo - Soru',
			songtitle: 'Soru',
			description: 'Anakronik',
			artist: 'Allame, Kezzo',
			image: 'https://upload.wikimedia.org/wikipedia/tr/0/07/Anakronik-album.jpg',
			type: 'album',
			src: 'https://ygtdgn.com/project-audio/allame-kezzo-soru.mp3'
		},
		{
			id: 3,
			title: 'Joker',
			description: 'Artist',
			artist: 'Joker',
			songtitle: 'Bi Kivilcim Yeter',
			image: 'https://i.scdn.co/image/ab6761610000e5ebb0cef9275c5cd439baf12c77',
			type: 'artist',
			src: 'https://ygtdgn.com/project-audio/bi-kivilcim-yeter-joker.mp3'
		},
		{
			id: 4,
			title: 'Haftalık Gündem Değerlendirmesi 2022/33',
			description: 'Teknoseyir',
			songtitle: 'Haftalık Gündem Değerlendirmesi 2022/33',
			artist: 'Teknoseyir',
			image: 'https://i.scdn.co/image/62c2ecc8138caf88f04305b307bbd9d5d8adcccb',
			type: 'podcast',
			src: 'https://ygtdgn.com/project-audio/haftalik-gundem-33.mp3'
		},
		{
			id: 5,
			title: 'Defkhan - Hayatim bi Battle',
			description: 'Hayatim bi Battle',
			songtitle: 'Hayatim bi Battle',
			artist: 'Defkhan',
			image: 'https://i.scdn.co/image/ab67616d0000b27375fbc1c088361e3359259874',
			type: 'album',
			src: 'https://ygtdgn.com/project-audio/Defkhan-Hayatim-bi-Battle.mp3'
		}
	]

	return (
		<div className="grid gap-y-8">
			<Section
				title="Recently played"
				more="/blabla"
				items={items}
			/>
			<Section
				title="Shows to try"
				more="/blabla"
				items={items}
			/>
			<Section
				title="Made For Yigit Dogan"
				more="/blabla"
				items={items}
			/>
		</div>
	)
}

export default Home