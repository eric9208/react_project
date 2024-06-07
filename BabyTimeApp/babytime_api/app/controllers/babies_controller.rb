class BabiesController < ApplicationController
    before_action :authenticate_user!

    def index
        @baby = Baby.find_by_user_id(@current_user)
    end

    def new
        @baby = Baby.new
    end

    def create
        @baby = Baby.new params.require(:baby)
        .permit(
          :first_name,
          :last_name,
          :dob
        )
        @baby.user = current_user
        if @baby.save
            flash[:success] = "Answer successfully created"
             redirect_to @baby
        end
    end

    def show
        @baby = Baby.find params[:id]
            if @baby.user != @current_user
                redirect_to activities_path
            end
    end


    def edit
        @baby = Baby.find params[:id]
        if @baby.user != @current_user
            redirect_to activities_path
        end
    end

    def update
        @baby = Baby.find params[:id]
        if @baby.update(baby_params)
            flash[:success] = "Question successfully updated"
            redirect_to @baby
            # redirect_to question_path(@question)
            # ^^older syntax
          else
            flash[:error] = "Something went wrong"
            render :edit, status: 303 
        end
    end

    private
    def baby_params
        params.require(:baby).permit(:first_name,:last_name,:dob)
      end
    
end
