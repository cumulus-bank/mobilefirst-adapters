/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2016. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

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
 * @param tag:
 */
function addNewAccount(tag){
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
 */
function getdata(){
	var input = {
		    method : 'get',
			returnedContentType : 'json',
			headers: {
				"Content-Type" : "application/json",
			},
		    path : '/users'
		};
	var result =  MFP.Server.invokeHttp(input);
	return result
}