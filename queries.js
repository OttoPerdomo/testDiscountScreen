export const discounts = `query Discounts {
    discountCarnets {
      data {
        attributes {
          Name
          CarnetImage {
            data {
              attributes {
                url
                name
              }
            }
          }
          products {
            data {
              id
              attributes {
                Header {
                  ... on ComponentCardComponentHeader {
                    Header: Header
                  }
                  ... on ComponentCardComponentStyledHeader {
                    TopSubHeader
                    Header
                    BottomSubHeader
                  }
                }
                Description
                Image {
                  data {
                    attributes {
                      name
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
  }`;

export const discountCarnet = `
  query DiscountCarnet{
    discountCarnets{
      data {
				id
        attributes {
          Name
          CarnetImage {
            data {
              attributes {
                url
                name
              }
            }
          }
        }
      }
    }
  }`;
export const getDiscountCarnets = `
  query getDiscountCarnets {
    discountModule {
      data {
        id
        attributes {
          Carnets {
            discount_carnet {
              data {
                id
                attributes {
                  Name
                  CarnetImage {
                    data {
                      attributes {
                        name
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
    }
  }
  `;

export const getDiscountProducts = `
  query getProductsByCarnetId($id: ID!) {
    discountModule {
      data {
        attributes {
         Carnets(filters:{discount_carnet:{id:{eq:$id}}}){
          Products(pagination: { pageSize: 1000 }){
            id
            discount_product{
              data{
                id
                attributes{
                   Name
                        Description
                        discount_categories {
                          data {
                            id
                            attributes {
                              Name
                            }
                          }
                        }
                        Image {
                          data {
                            attributes {
                              name
                              url
                            }
                          }
                        }
                        Header {
                          __typename
                          ... on ComponentCardComponentStyledHeader {
                            Header
                            TopSubHeader
                            BottomSubHeader
                          }
                          __typename
                          ... on ComponentCardComponentHeader {
                            Header
                          }
                        }
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

export const discountProducts = `
	  query Products($id: ID) {
	  products(filters: { discount_carnets: { id: { eq: $id } } }, pagination: { pageSize: 1000 }) {
	    data {
	      id
	      attributes {
	        Header {
	          ... on ComponentCardComponentHeader {
	            Header: Header
	          }
	          ... on ComponentCardComponentStyledHeader {
	            TopSubHeader
	            Header
	            BottomSubHeader
	          }
	        }
	        discount_categories {
	          data {
	            id
	            attributes {
	              Name
	            }
	          }
	        }
	        Description
	        Image {
	          data {
	            attributes {
	              name
	              url
	            }
	          }
	        }
	      }
	    }
	  }
	}
  `;

export const discountCategories = `
  query Categories{
    discountCategories{
      data{
        id
        attributes{
          Name
  }
      }
    }
  }
  `;


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

