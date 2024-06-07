class Api::ApplicationController < ApplicationController
    skip_before_action :verify_authenticity_token

    private
    

    def authenticate_user!
        redirect_to new_session_path, notice: "Please sign in" unless user_signed_in?
        # render json: "Need to sign in with session"
    end
end
