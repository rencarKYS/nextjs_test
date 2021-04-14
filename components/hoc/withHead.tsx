import Head from 'next/head';


const withHead = (Component:any, title:string, description: string) => {
  
	const HocComponent = (props: JSX.IntrinsicAttributes) => {
    
		return (

			<>
				<Head>
					<title>{title}</title>
					<meta name="description" content={description} />
				</Head>
				<Component {...props}/>
			</>

		);
	};

	return HocComponent;

};

export default withHead;