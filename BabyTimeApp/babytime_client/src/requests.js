const baseURL = "http://localhost:3000/api/v1";


export const Baby = {
  index(){
    return fetch(`${baseURL}/babies`,{ 
      method: "GET",
      credentials: "include",
      headers: {
      "Content-type": "application/json",
  },
})
    .then(response => {
        
        return response.json()
    })
},
  create(params) {
      return fetch(`${baseURL}/babies`, {
        method: 'POST',
        credentials: 'include', // need for cookies to be sent cross origin
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then(res => res.json())
    },
    show(id) {
      return fetch(`${baseURL}/babies/${id}`, { 
        method: "GET",
        credentials: "include",
        headers: {
        "Content-type": "application/json",
    },
  }).then((res) => res.json());
    },
    update(id, params) {
      return fetch(`${baseURL}/babies/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(params),
      }).then((res) => res.json());
    },
    destroy(id) {
      return fetch(`${baseURL}/babies/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
    },

}



export const Activity = {
  index(){
    return fetch(`${baseURL}/activities`,{ 
      method: "GET",
      credentials: "include",
      headers: {
      "Content-type": "application/json",
  },
})
    .then(response => {
        
        return response.json()
    })
},

    create(params) {
        return fetch(`${baseURL}/activities`,{
            method: "POST",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    }

}

export const Sleep = {
    create(params) {
        return fetch(`${baseURL}/sleeps`, {
          method: 'POST',
          credentials: 'include', // need for cookies to be sent cross origin
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(params)
        }).then(res => res.json())
      },
      show(id) {
        return fetch(`${baseURL}/sleeps/${id}`, { 
          method: "GET",
          credentials: "include",
          headers: {
          "Content-type": "application/json",
      },
    }).then((res) => res.json());
      },
      update(id, params) {
        return fetch(`${baseURL}/sleeps/${id}`, {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(params),
        }).then((res) => res.json());
      },
      destroy(id) {
        return fetch(`${baseURL}/sleeps/${id}`, {
          method: "DELETE",
          credentials: "include",
        });
      },

}

export const Diaper = {
    create(params) {
        return fetch(`${baseURL}/diapers`, {
          method: 'POST',
          credentials: 'include', // need for cookies to be sent cross origin
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(params)
        }).then(res => res.json())
      },
      show(id) {
        return fetch(`${baseURL}/diapers/${id}`, { 
          method: "GET",
          credentials: "include",
          headers: {
          "Content-type": "application/json",
      },
    }).then((res) => res.json());
      },
      update(id, params) {
        return fetch(`${baseURL}/diapers/${id}`, {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(params),
        }).then((res) => res.json());
      },
      destroy(id) {
        return fetch(`${baseURL}/diapers/${id}`, {
          method: "DELETE",
          credentials: "include",
        });
      },

}

export const Formula = {
    create(params) {
        return fetch(`${baseURL}/formulas`, {
          method: 'POST',
          credentials: 'include', // need for cookies to be sent cross origin
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(params)
        }).then(res => res.json())
      },
      show(id) {
        return fetch(`${baseURL}/formulas/${id}`, { 
          method: "GET",
          credentials: "include",
          headers: {
          "Content-type": "application/json",
      },
    }).then((res) => res.json());
      },
      update(id, params) {
        return fetch(`${baseURL}/formulas/${id}`, {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(params),
        }).then((res) => res.json());
      },
      destroy(id) {
        return fetch(`${baseURL}/formulas/${id}`, {
          method: "DELETE",
          credentials: "include",
        });
      },

}




export const Session = {
    create(params) {
      return fetch(`${baseURL}/session`, {
        method: 'POST',
        credentials: 'include', // need for cookies to be sent cross origin
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then(res => res.json())
    },
    destroy(){
        return fetch(`${baseURL}/session`, {
            method: 'DELETE',
            credentials: 'include' // need for cookies to be sent cross origin
          }).then(res => res.json())
    }
  }

  export const User = {
    current() {
      return fetch(`${baseURL}/users/current`, {
        credentials: "include", // need for cookies to be allowed to be sent cross-origin
      }).then((res) => res.json());
    },
    create(params) {
        return fetch(`${baseURL}/users`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ user: params })
        }).then(res => res.json())
      }
  };


