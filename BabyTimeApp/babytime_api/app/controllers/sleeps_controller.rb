class SleepsController < ApplicationController
    before_action :authenticate_user!
# before_action :current_activity

  

    def new
        @sleep = Sleep.new
    end

    def create
        @sleep = Sleep.new params.require(:sleep)
        .permit(
          :title,
          :duration,
          :note
        )
        @sleep.activity = Activity.find_by_user_id(@current_user)
        if @sleep.save
            flash[:success] = "Answer successfully created"
             redirect_to @sleep
        end
    end

    def show
     
        @sleep = Sleep.find params[:id]
        if @sleep.activity.user != current_user
            redirect_to activities_path
        end
    end

    def edit
        @sleep = Sleep.find params[:id]
        if @sleep.activity.user != current_user
            redirect_to activities_path
        end
    end

    def update
        @sleep = Sleep.find params[:id]
        if @sleep.update(sleep_params)
            flash[:success] = "Question successfully updated"
            redirect_to @sleep
            # redirect_to question_path(@question)
            # ^^older syntax
          else
            flash[:error] = "Something went wrong"
            render :edit, status: 303 
        end
    end

    def destroy
        @sleep = Sleep.find params[:id]
        @sleep.destroy
        redirect_to activities_path
      end


private
def sleep_params
    params.require(:sleep).permit(:duration, :note)
  end

end
