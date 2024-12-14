package main

import (
	"fmt"
	"net/http"
	"log"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./static")))
	http.HandleFunc("/send-message", handleSendMessage)

	fmt.Println("Server running at http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func handleSendMessage(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		fmt.Fprintf(w, "Message received")
	} else {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
	}
}
