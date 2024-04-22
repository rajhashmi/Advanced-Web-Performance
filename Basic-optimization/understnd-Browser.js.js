/*
    * Network layer
    * Parsing
    * Resourse Discovery phase
    * Resourse Prioritization
    * Layout
    * Paint
     


What happen we visit a url let's understand this

1. DNS query - 100ms 
    when we enter url and hit enter the browser don't know about that url so first it will go in Domain name System record and find the ip address of that url and return it. 
    Domain Name System acutally the website name like https://www.leetcode.com have it's IP address and it is saved in somewhare(I dont know).

2. TCP connection - 120ms
    Transmisson controll protocol, this will make secure connection to the server to transfer files remember that there is also a UDP connection which is fast from TCP because it not make a relaible connection with client it's like trowring a data to client, So TCP is more relaible then UDP cuz we don't what to loose any data while sending it

3. SSL Negotation - 150ms
    Secure Sockets Layer this is a security protocol this is used to make encrypted link between client and server becuase so we can privatly communicate with server

4. HTTP Request - uplink
    now we know where the server is and we made a secure connection with that now browser will request to the server

5. Server process (backend time) - 200ms to 500ms
6. HTTP Response - download
7. Browser HTML parsing
8. resourse discovery 
9. render (layout,  paint)
*/ 

