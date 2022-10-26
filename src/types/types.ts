export type ContextType = {
    id: string,
		created_at: Date,
		updated_at: Date,
		promoted_at: Date,
		width: number,
		height: number,
		color: string,
		blur_hash: string,
		description: string,
		alt_description: string,
		urls: {
			raw: string,
			full: string,
			regular: string,
			small: string,
			thumb: string,
			small_s3: string
		},
		links: {
			self: string,
			html: string,
			download: string,
			download_location: string
		},
		likes: number,
		liked_by_user: boolean,
		current_user_collections: string[],
		sponsorship: boolean,
		topic_submissions: {},
		user: {
			id: string,
			updated_at: Date,
			username: string,
			name: string,
			first_name: string,
			last_name: string,
			twitter_username: boolean,
			portfolio_url: boolean,
			bio: string,
			location: string,
			links: {
				self: string,
				html: string,
				photos: string,
				likes: string,
				portfolio: string,
				following: string,
				followers: string
			},
			profile_image: {
				small: string,
				medium: string,
				large: string
			},
			instagram_username: string | null,
			total_collections: number,
			total_likes: number,
			total_photos: number,
			accepted_tos: boolean,
			for_hire: boolean,
			social: {
				instagram_username: string | null,
				portfolio_url: string | null,
				twitter_username: string | null,
				paypal_email: string | null
			}
		}
	}

export type InterativsPosts= {
	url: string;
	like: number;
	dis_like: number;
}