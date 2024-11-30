import { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Stack } from '@mui/material'
import { fetchPosts } from '../../services/api-services'

export default function Posts() {
	const [posts, setPosts] = useState<IPosts>(fetchPosts())
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
					<div className="flex items-center justify-between">
						<span>
							<Stack direction="row">
								<img
									className="w-6 h-6 rounded-full"
									src="https://avatars.githubusercontent.com/u/22798274?v=4"
									alt="User Avatar"
								/>
								<span className="font-semibold pl-1">{post.author}</span>
								<span className="text-sm text-gray-500 pl-1">{post.date}</span>
							</Stack>
						</span>
						<div>
							{/* Right Side: Follow Button */}
							<button className="rounded-full items-center bg-sky-500 px-1.5 py-0.5 border border-transparent text-sm text-white transition-all shadow-sm">
								Follow
							</button>
							<MoreVertIcon />
						</div>
					</div>
					<p className="mt-2 text-gray-800">{post.content}</p>
				</div>
			))}
		</div>
	)
}