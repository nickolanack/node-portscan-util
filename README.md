# node-portscan-util
simple command line tool to scan a range of ports, to verify http connectivity

useage:

```
# check ports 8080 to 18080. 
node port-scan.js yourdomain.com 8080 18080

#output
# ...
#closed: 8077
#closed: 8078
#closed: 8079
#open port: 8080
#closed: 8081
#closed: 8082
#closed: 8083
#closed: 8084
#...
```

this seems to be at least useful for local firewall issues, although internal routing may get passed a network firewall
that would otherwise block requests...
