react-google-structured-data

add package

    yarn add react-google-structured-data

import

    import StructuredData from 'react-google-structured-data'

use

    <StructuredData
        type='Organization'
        data={{
            url: 'https://example.com',
            logo: `https://example.com/${require('images/header/logo_512.png')}`,
            name: 'example',
            sameAs: [
                'https://www.facebook.com/example/',
                'https://www.linkedin.com/company/example/',
            ],
        }}
    />

observe

    <div>
        <script type="application/ld+json">
            {
                "@context": "http://schema.org",
                "@type":"Organization",
                "url":"https://example.com",
                "logo":"https://example.com/images/header/logo_512-53019.png",
                "name":"example",
                "sameAs":[
                    "https://www.facebook.com/example/",
                    "https://www.linkedin.com/company/example/"
                ]
            }
        </script>
    </div>

(Actual output will be minified)