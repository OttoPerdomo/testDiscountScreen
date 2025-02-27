export const sections = `
query Sections($slug: String){
	sections(filters: {module:{slug:{eq:$slug}}}){
		data{
			attributes{
				title,
				image{
					data{
						attributes{
							url,
						}
					}
				}
			}
		}
	}
}
`;

export const banners = `
query Sections($slug: String){
	sections(filters: {slug:{contains:$slug}}){
		data{
			attributes{
				title,
				image{
					data{
						attributes{
							url,
						}
					}
				}
			}
		}
	}
}
`;
export const principal = `
query Home($slug: String){
	sections(filters:{slug:{eq:$slug}}){
		data{
			attributes{
				content{
					 __typename
				... on ComponentHomeComponentsPageCard {
					id
					header
					icon{
						data{
							attributes{
								url
							}
						}
					}
				}
					
				}
			}
		}
	}
}`;

export const terms = `
query Sections($slug: String){
	sections(filters: {slug:{eq:$slug}}){
		data{
			attributes{
				title,
				content {
				 __typename
                    ... on ComponentAppComponentHeaderStyle {
                        id
                        title
                        style
                        content
                    }
					__typename
				... on ComponentHomeComponentsPageCard {
					id
					header
					url
					icon{
						data{
							attributes{
								url
							}
						}
					}
				}
				}
				
			}
		}
	}
}
`;

export const cita_presencial = `
query Sections($slug: String) {
	sections(filters: { slug: { eq: $slug } }) {
		data {
			attributes {
				title
				content {
					__typename
					... on ComponentHomeComponentsPageCard {
						id
						header
						content
						url
						icon {
							data {
								attributes {
									url
								}
							}
						}
					}
					__typename
					... on ComponentPageComponentsButton {
						id
						title
						url
					}
				}
			}
		}
	}
}
`;
export const discounts = `
query Sections($slug: String){
	sections(filters: {slug:{eq:$slug}}){
		data{
			attributes{
				title,
				content {
				 __typename
				 ... on ComponentPageComponentsHeaderText {
					id
					Text
					Header
                 }
				 __typename
				 ... on ComponentHomeComponentsPageCard {
					id
					header
					content
					url
					icon{
						data{
							attributes{
								url
							}
						}
					}
				}
				}
				
			}
		}
	}
}
`;