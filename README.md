React Formbuilder


# Installation

To run the formbuilder locally, you can issue the following commands:

```
`bash

$ cd React_FormBuilder  
$ npm install
$ npm run start  
```

When you generate a form, you're actually generating two *tokens*:
- the *adminToken*, that you need to keep secret, giving you access to all the
  submitted data;
- the *userToken*, that's used by users to find back the proper form.

One interesting property of the *userToken* is that it is actually half of the
admin token !

With that in mind, let's say we've generated a form with an *adminToken* of `152e3b0af1e14cb186894980ecac95de`. The *userToken* is then `152e3b0af1e14cb1`.

So if we want to have access to the data on the server, using curl, we need to authenticate as the admin (using [BasicAuth](https://en.wikipedia.org/wiki/Basic_access_authentication) with `form:{adminToken}`):

```
$ SERVER_URL="http://localhost:8888/v1"
$ ADMIN_TOKEN="152e3b0af1e14cb186894980ecac95de"
$ FORM_ID="152e3b0af1e14cb1"
$ curl $SERVER_URL/buckets/formbuilder/collections/$FORM_ID/records \
   -u form:$ADMIN_TOKEN | python -m json.tool
{
    "data": [
        {
            "how_are_you_feeling_today": "I don't know",
            "id": "7785a0bb-cf75-4da4-a757-faefb30e47ae",
            "last_modified": 1464788211487,
            "name": "Clark Kent"
        },
        {
            "how_are_you_feeling_today": "Quite bad",
            "id": "23b00a31-6acc-4ad2-894c-e208fb9d38bc",
            "last_modified": 1464788201181,
            "name": "Garfield"
        },
        {
            "how_are_you_feeling_today": "Happy",
            "id": "aedfb695-b22c-433d-a104-60a0cee8cb55",
            "last_modified": 1464788192427,
            "name": "Lucky Luke"
        }
    ]
}
```

