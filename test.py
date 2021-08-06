import requests
import json

reqUrl = "https://aquarius.oceanprotocol.com/api/v1/aquarius/assets/ddo/query"

headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.io)",
    "Content-Type": "application/json",
}

payload = '{\n    "cancelToken": {\n        "promise": {}\n    },\n    "offset": 9,\n    "page": 1,\n    "query": {\n        "query_string": {\n            "query": "(chainId:4 OR chainId:3) AND -isInPurgatory:true "\n        }\n    },\n    "sort": {\n        "created": -1\n    }\n}'

response = requests.request("POST", reqUrl, data=payload, headers=headersList)
