class UsersController < ApplicationController
    def new
        @user = User.new
      end
    
      def create
        @user = User.new params.require(:user).permit(
                                    #:user is referring to user model
          :first_name,
          :last_name,
          :email,
          :password,
          :password_confirmation
          #confirmation confirms if the password matches the authentication
        )
        if @user.save
            session[:user_id] = @user.id
            flash.notice = "Signed up!"
            redirect_to root_path
        else
          render :new, status: 303
    
        end
      end


end
