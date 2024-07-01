
export const API ={
    baseUrl:'http://localhost:3200/v1',
    services:[
                {
                    name:'kpi',
                    endpoints:[
                                'list',
                                'filter'
                            ]
                },
                {
                    name:'operation',
                    endpoints:[
                                'list',
                                'del'
                            ]
                }
                // other services 
    ]
}