var config = {
    style: 'mapbox://styles/dd-mapeo/ckw44fy4214l214pbfaupc4ba',
    accessToken: 'pk.eyJ1IjoiZGQtbWFwZW8iLCJhIjoiY2tuaGtxN2hjMjg5YTJ1b29kb3k4a3hwMCJ9.Q4cR8vp-Z6pP9PTUswy7Vw',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: false,
    title: 'Technology in Solidarity with Frontline Technologies',
    logo: 'images/Digital Democracy.png',
	mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">',
    bookmarks: '<strong>Bookmarks</strong>: <a href="#page1">Overview</a> | <a href="#page2">Territory mapping with the Waorani (Ecuador)</a> | | <a href="#page4">Monitoring with ECA-Amarakaeri (Peru)</a> | <a href="#page6">Historical land tenure mapping with the Ogiek (Kenya)</a> | <a href="#page9">Mapping oral histories with Ohneganos (Canada)',
	footer: '<a href="https://digital-democracy.org" class="fas fa-link" target="_blank"></a>&nbsp;<a href="https://www.instagram.com/digidem/" class="fab fa-instagram" target="_blank"></a>&nbsp;<a href="http://twitter.com/DigiDem" class="fab fa-twitter" target="_blank"></a>&nbsp;<a href="https://www.facebook.com/digidemocracy/" class="fab fa-facebook-f" target="_blank"></a>&nbsp;<a href="https://www.linkedin.com/company/-digital-democracy/" class="fab fa-linkedin" target="_blank"></a>&nbsp;<a href="https://www.youtube.com/user/digitaldemocracycam" class="fab fa-youtube" target="_blank"></a>',
    chapters: [
        {
            id: 'page1',
            alignment: "left",
            hidden: false,
            title: 'Overview',
            image: 'images/overview.jpg',
            description: 'Digital Democracy partners with marginalized communities worldwide to build tools to defend their  environmental and human rights. We envision a healthy, vibrant planet where all people are able to participate in the decisions that govern their lives.<br><br>Our work lies in deep, trusting relationships with local partners. Digital Democracy supports communities who are working to defend their human and environmental rights, but who lack the tools to do so. Our local partners represent marginalized communities worldwide, including Indigenous Peoples and ethnic minorities, whose human rights are most severely impacted by environmental abuse. We train partners to use basic digital tools to gather, share, and manage information about environmental and human rights infractions.<br><br>Based on years of work with local communities, Digital Democracy observed persistent technological gaps that weren’t being met by corporate technologies. In 2013 we began to co-create tech solutions with our partners in the Amazon to develop a tool that would meet their needs, resulting in Mapeo, an open-source tool for frontline defenders.',
                location: {
                center: [180, 17], 
				zoom: 1.75,
				pitch: 0.00,
				bearing: 0.00,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: "country-label",
                    opacity: 0,
                },                
                {
                    layer: "state-label",
                    opacity: 0,
                },
                {
                    layer: "settlement-major-label",
                    opacity: 0,
                },
                {
                    layer: "settlement-minor-label",
                    opacity: 0,
                },
                {
                    layer: "settlement-subdivision-label",
                    opacity: 0,
                },
                {
                    layer: "dd-workareas",
                    opacity: 1,
                },
                {
                    layer: 'admin-0-boundary',
                    opacity: 0
                },  
                {
                    layer: 'native-land',
                    opacity: 1
                }    
			],
            onChapterExit: [
            ]
        },
		        {
            id: 'page2',
            alignment: "left",
            hidden: false,
            title: 'Territory mapping with the Waorani (Ecuador)',
            image: 'images/waorani.jpg',
            author: 'Aliya Ryan, Digital Democracy',
            description: '<em>"Waorani Territory is our home, and it is full of life, but it is a fragile and threatened life which we will always fight to protect. The State comes and shows us maps but we don\'t recognize them: their maps are empty, but our territory is full and alive... Making the maps has built unity and solidarity amongst our people. And they are an opportunity to tell the world our story, ourselves."</em> Oswando Nenquimo<br><br>The Waorani people live in the heart of the Ecaudorian Amazon. In 2015 they started a territory mapping project to defend their lands, culture and the livelihoods of their children from oil operations and other extractive activities. The Waorani mapping team, lead by Oswando Nenquimo, worked alongside Alianza Ceibo and Amazon Frontlines, and partnered with Digital Democracy to codevelop Mapeo. They used Mapeo throughout the 3 years of their mapping project, and are now using it as part of ongoing territory monitoring and defense work. The Waorani used the maps they made of the 22 communities in the Pastaza region in a courtcase against the Ecuadorian Government in 2019, in opposition to a new oil concession. The judges\' landmark ruling agreed that the concession had been created without a due consultation process, and xxxx acres of the Waorani\'s rainforest home was protected from devastation.',
            location: {
                center: [-76.38612, -1.15350], 
				zoom: 8.5,
				pitch: 0.00,
				bearing: 0.00,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: "country-label",
                    opacity: 1,
                },
                {
                    layer: "state-label",
                    opacity: 1,
                },
                {
                    layer: "settlement-major-label",
                    opacity: 1,
                },
                {
                    layer: "settlement-minor-label",
                    opacity: 1,
                },
                {
                    layer: "settlement-subdivision-label",
                    opacity: 1,
                },
                {
                    layer: 'admin-0-boundary',
                    opacity: 1
                },          
                {
                    layer: "dd-workareas",
                    opacity: 0,
                },
                {
                    layer: "eca-reserve-label",
                    opacity: 0,
                },
                {
                    layer: "eca-community-labels",
                    opacity: 0,
                },
                {
                    layer: "eca-puestos",
                    opacity: 0,
                },
                {
                    layer: "eca-minero",
                    opacity: 0,
                },
                {
                    layer: "eca-reserve",
                    opacity: 0,
                },
                {
                    layer: "eca-community",
                    opacity: 0,
                },
                {
                    layer: "eca-buffer",
                    opacity: 0,
                },  
                {
                    layer: 'native-land',
                    opacity: 0
                }    
			],
            onChapterExit: [
            ]
        },
		        {
            id: 'page4',
            alignment: "left",
            hidden: false,
            title: 'Monitoring with ECA-Amarakaeri (Peru)',
            image: 'images/eca.jpg',
            author: 'Mar Cártro, Digital Democracy',
            description: 'In the Peruvian Madre de Dios department, the Harakbut, Matsiguenka, and Yine Peoples have monitored and protected their ancestral territories for centuries and consider themselves as owners and guards of this part of the Amazon. In 2002, following 18 years of constant struggle, part of their ancestral territory was recognized as a natural protected area, called the Amarakaeri Communal Reserve. Since 2006, the reserve is co-managed between ten Indigenous communities (organized by the ECA Amarakaeri organization) and the National Service of Protected Areas (SERNANP), with the support of two Indigenous organizations (FENAMAD and COHARYIMA). Community guards, park rangers and technicians use Mapeo, together with other state-of-the-art Technology, to protect their ancestral forests from illegal mining and logging. Their exemplary efforts have been recognized by the Equator Prize in 2019. Moreover, the IUCN included the Amarakaeri Communal Reserve in their Green list because of its high conservation status.',
            location: {
                center: [-71.284, -12.768], 
				zoom: 9,
				pitch: 0.00,
				bearing: 0.00,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: "eca-reserve-label",
                    opacity: 1,
                },
                {
                    layer: "eca-community-labels",
                    opacity: 1,
                },
                {
                    layer: "eca-puestos",
                    opacity: 1,
                },
                {
                    layer: "eca-minero",
                    opacity: 1,
                },
                {
                    layer: "eca-reserve",
                    opacity: 1,
                },
                {
                    layer: "eca-community",
                    opacity: 1,
                },
                {
                    layer: "eca-buffer",
                    opacity: 1,
                },
                {
                    layer: 'admin-0-boundary',
                    opacity: 1
                }    
			],
            onChapterExit: [
            ]
        },
		        {
            id: 'page6',
            alignment: "left",
            hidden: false,
            title: 'Historical land tenure mapping with the Ogiek (Kenya)',
            image: 'images/ogiek.jpg',
            author: 'Rudo Kemper, Digital Democracy',
            description: 'The Ogiek are one of Africa’s last remaining forest dwellers and hunter-gatherer communities. Traditionally honey-gatherers, they survive mainly on wild fruits and roots, game hunting and traditional beekeeping. Since the beginning of the twentieth century, the Ogiek at Mount Elgon in Kenya have been routinely subjected to arbitrary forced evictions from their ancestral lands, and having their lands allocated to agricultural settlers or national parks. The Chepkitale Indigenous Peoples Development Project (CIPDP) is an Ogiek community organization working to advocate for the recovery of land rights of Ogiek ancestral lands.<br><br>Digital Democracy is helping the Ogiek community in using Mapeo to collect and have local ownership over data about their ancestral lands to support the advocacy processes led by CIPDP. In partnership with the Forest Peoples Programme, we are providing remote accompaniment to help build a bespoke Mapeo configuration for the Ogiek and train a dedicated team of CIPDP mappers to use Mapeo, so they can go on and train others in the community, and initiate a participatory mapping process across the ancestral territory. The hope is that the data and maps generated, along with solidarity building during the process, will empower the Ogiek to negotiate for their land rights, and also clarify boundaries between the lands of other neighboring communities.',
            location: {
                center: [34.56696, 1.026], 
				zoom: 9.95,
				pitch: 0.00,
				bearing: 0.00,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: 'ogiek-1',
                    opacity: 0.5
                },
                {
                    layer: 'ogiek-2',
                    opacity: 1
                },
                {
                    layer: 'ogiek-label-1',
                    opacity: 0
                },
                {
                    layer: 'ogiek-label-2',
                    opacity: 1
                },
                {
                    layer: 'admin-0-boundary',
                    opacity: 1
                },        
                {
                    layer: 'settlement-minor-label',
                    opacity: 1
                },       
                {
                    layer: 'state-label',
                    opacity: 1
                },
                {
                    layer: "eca-reserve-label",
                    opacity: 0,
                },
                {
                    layer: "eca-community-labels",
                    opacity: 0,
                },
                {
                    layer: "eca-puestos",
                    opacity: 0,
                },
                {
                    layer: "eca-minero",
                    opacity: 0,
                },
                {
                    layer: "eca-reserve",
                    opacity: 0,
                },
                {
                    layer: "eca-community",
                    opacity: 0,
                },
                {
                    layer: "eca-buffer",
                    opacity: 0,
                }
			],
            onChapterExit: [
                {
                    layer: 'ogiek-1',
                    opacity: 0
                },
                {
                    layer: 'ogiek-2',
                    opacity: 0
                },
                {
                    layer: 'ogiek-label-1',
                    opacity: 0
                },
                {
                    layer: 'ogiek-label-2',
                    opacity: 0
                },
            ]
        },			
		        {
            id: 'page9',
            alignment: "left",
            hidden: false,
            title: 'Mapping oral histories with Ohneganos (Canada)',
            image: 'images/ohneganos.jpg',
            author: 'Rudo Kemper, Digital Democracy',
            description: 'Six Nations is the largest First Nations reserve in Canada. It is the only reserve in North America that has representatives of all six Haudenosaunee nations living together. These nations are the Mohawk, Cayuga, Onondaga, Oneida, Seneca and Tuscarora. Some Lenape (formerly known as Delaware) also live in the territory. The Haudenosaunee (or Iroquois) people originally inhabited a much larger area stretching across the United Stated and Canada, and were legally granted a large tract of land by the French via the 1784 Haldimand Treaty; this was later taken away, and Six Nations represents only 5% of that area. The organization Ohneganos is an Indigenous water research program led by McMaster University professor Dr. Dawn Martin Hill, and are working to co-create Indigenous water quality tools, and mixed-method tools for collecting and training in Indigenous ecological knowledge.<br><br>As part of the Indigenous ecological knowledge research program of Ohneganos, Digital Democracy is providing programmatic support to Ohneganos in using Mapeo to collect Indigenous ecological knowledge across Six Nations, and recording place-based oral histories about important Haudenosaunee cultural sites across the lands. The Ohneganos team, together with a local mapping coordinator, will be using both Mapeo Mobile and Desktop to gather and organize data, and will be mapping and visualizing the geospatial data and stories using the open-source application Terrastories. This project represents the first pilot in testing out a Mapeo-to-Terrastories workflow.',
            location: {
                center: [-79.31420, 43.61287], 
				zoom: 6.5,
				pitch: 0.00,
				bearing: 0.00,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: 'ohneganos-1',
                    opacity: 1
                },
                {
                    layer: 'ohneganos-2',
                    opacity: 1
                },
                {
                    layer: 'ohneganos-label-1',
                    opacity: 1
                },
                {
                    layer: 'ohneganos-label-2',
                    opacity: 1
                },
                {
                    layer: 'ohneganos-label-3',
                    opacity: 1
                },
                {
                    layer: 'admin-0-boundary',
                    opacity: 1
                },
                {
                    layer: 'settlement-minor-label',
                    opacity: 0
                },
                {
                    layer: 'state-label',
                    opacity: 0
                },

			],
            onChapterExit: [
                {
                    layer: 'ohneganos-1',
                    opacity: 0
                },
                {
                    layer: 'ohneganos-2',
                    opacity: 0
                },
                {
                    layer: 'ohneganos-label-1',
                    opacity: 0
                },
                {
                    layer: 'ohneganos-label-2',
                    opacity: 0
                },
                {
                    layer: 'ohneganos-label-3',
                    opacity: 0
                },
            ]
        }
    ]
};
