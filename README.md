# node-portscan-util
simple command line tool to scan a range of ports, to verify http connectivity

useage:

```
# check ports 8080 to 18080. 
node port-scan yourdomain.com 8080 18080
```

this seems to be at least useful for local firewall issues, although internal routing may get passed a network firewall
that would otherwise block requests...
