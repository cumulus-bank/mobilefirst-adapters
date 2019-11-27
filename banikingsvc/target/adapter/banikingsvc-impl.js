/**
 * @param tag: a topic such as MobileFirst_Platform, Bluemix, Cordova.
 * @returns json list of items.
 */

function getFeed(tag) {
	var input = {
	    method : 'get',
	    returnedContentType : 'xml',
	    path : getPath(tag)
	};

	return MFP.Server.invokeHttp(input);
}

/**
 * Helper function to build the URL path.
 */
function getPath(tag){
    if(tag === undefined || tag === ''){
        return 'feed.xml';
    } else {
        return 'blog/atom/' + tag + '.xml';
    }
}

/**
 * @returns ok
 */
function unprotected(param) {
	return {result : "Hello from unprotected resource"};
}


/**
 * @returns 
 * @param tag
 */
function addNewAccount(tag){
	MFP.Logger.error(">>>>>>>>>" + JSON.stringify(tag));
	var input = {
		    method : 'post',
			returnedContentType : 'json',
			headers: {
				"Content-Type" : "application/json",
			},
			body: {
				contentType: 'application/json' ,
				content: tag
			},
		    path : '/listAccount'
		};
	var result =  MFP.Server.invokeHttp(input);
	return result
}


/**
 * @returns 
 */
function test(tag){
	MFP.Logger.error(">>>>>>>>>" + JSON.stringify(tag));
    return {"hello" : JSON.stringify(tag)};
}

/**
 * @returns 
 */
function getAccount(){
	var input = {
		    method : 'get',
			returnedContentType : 'json',
			headers: {
				"Content-Type" : "application/json",
			},
		    path : '/listAccount'
		};
	var result =  MFP.Server.invokeHttp(input);
	return result
}


/**
 * @returns 
 * @param tag
 */
function getAccountById(tag){
	var input = {
		    method : 'get',
			returnedContentType : 'json',
			headers: {
				"Content-Type" : "application/json",
			},
		    path : '/listAccount/'+ tag
		};
	var result =  MFP.Server.invokeHttp(input);
	return result
}

/**
 * @returns 
 * @param tag 
 */
function getAccountByID(tag){
	var input = {
		    method : 'get',
			returnedContentType : 'json',
			headers: {
				"Content-Type" : "application/json",
			},
		    path : '/listAccountID/'+ tag
		};
	var result =  MFP.Server.invokeHttp(input);
	return result
}


/**
 * @returns 
 * @param tag 
 */
function updateAccount(tag){
	var input = {
		    method : 'put',
			returnedContentType : 'json',
			headers: {
				"Content-Type" : "application/json",
			},
		    path : '/listAccount/'+ tag
		};
	var result =  MFP.Server.invokeHttp(input);
	return result
}


/**
 * @returns 
 * @param tag 
 */
function deleteAccount(tag){
	var input = {
		    method : 'delete',
			returnedContentType : 'json',
			headers: {
				"Content-Type" : "application/json",
			},
		    path : '/listAccount/'+ tag
		};
	var result =  MFP.Server.invokeHttp(input);
	return result
}


/**
 * @returns 
 * @param tag:
 */
function activate(tag){
	var input = {
		    method : 'post',
			returnedContentType : 'json',
			headers: {
				"Content-Type" : "application/json",
			},
			body: {
				contentType: 'application/json' ,
				content: tag
			},
		    path : '/activate'
		};
	var result =  MFP.Server.invokeHttp(input);
	return result
}

/**
 * @returns 
 * @param tag:
 */
function bill(tag){
	var input = {
		    method : 'post',
			returnedContentType : 'json',
			headers: {
				"Content-Type" : "application/json",
			},
			body: {
				contentType: 'application/json' ,
				content: tag
			},
		    path : '/bill'
		};
	var result =  MFP.Server.invokeHttp(input);
	return result
}

/**
 * @returns 
 * @param tag:
 */
function balanceUpdate(tag){
	var input = {
		    method : 'post',
			returnedContentType : 'json',
			headers: {
				"Content-Type" : "application/json",
			},
			body: {
				contentType: 'application/json' ,
				content: tag
			},
		    path : '/balanceUpdate'
		};
	var result =  MFP.Server.invokeHttp(input);
	return result
}

/**
 * @returns 
 * @param tag:
 */
function transaction(tag){
	var input = {
		    method : 'post',
			returnedContentType : 'json',
			headers: {
				"Content-Type" : "application/json",
			},
			body: {
				contentType: 'application/json' ,
				content: tag
			},
		    path : '/transaction'
		};
	var result =  MFP.Server.invokeHttp(input);
	return result
}