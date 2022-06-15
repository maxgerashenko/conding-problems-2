// 1108. Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
    if(typeof address != 'string') {
        throw new Error('wront type');
    }
    
    
    return address.split('.').join('[.]');
};
// 4 minutes ago	Accepted	56 ms	33.9 MB	javascript


/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
    if(typeof address != 'string') {
        throw new Error('wront type');
    }
    
    for(let i=1; i < address.length-1; i++) {
        if(address[i] === '.') {
            let pre = address.slice(0,i);
            let post = address.slice(i+1);
            address = `${pre}[.]${post}`;
            i += 3;
        }
    }
    
    return address;
};
// a few seconds ago	Accepted	48 ms	33.9 MB	javascript