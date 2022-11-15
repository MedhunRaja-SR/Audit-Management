export const Microservices : {[key: string]: string} = {
    // give like this : 
    // "ms-name" : "http://localhost:[port-no.]/[context-root]"
    /* "auth"      : "http://localhost:8100/auth",
       "benchmark" : "http://localhost:8250/benchmark",
       "checklist" : "http://localhost:8200/checklist",
       "severity"  : "http://localhost:8300/severity" 
    */

    // "ms-name" : "http://[ec2-instance_Ipv4]/[context-root]"
    "auth"      : "http://ec2-52-42-19-71.us-west-2.compute.amazonaws.com:8100/auth",
    "benchmark" : "http://ec2-52-42-19-71.us-west-2.compute.amazonaws.com:8250/benchmark",
    "checklist" : "http://ec2-52-42-19-71.us-west-2.compute.amazonaws.com:8200/checklist",
    "severity"  : "http://ec2-52-42-19-71.us-west-2.compute.amazonaws.com:8300/severity"
}